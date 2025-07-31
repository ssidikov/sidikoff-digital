import { useState, useCallback } from 'react'

export interface FormField {
  value: string
  error?: string | undefined
  touched?: boolean | undefined
}

export interface FormState {
  [key: string]: FormField
}

export interface UseFormOptions {
  initialValues: Record<string, string>
  validationRules?: Record<string, (value: string) => string | undefined>
  onSubmit?: (values: Record<string, string>) => Promise<void> | void
}

export const useForm = ({ initialValues, validationRules, onSubmit }: UseFormOptions) => {
  const [formState, setFormState] = useState<FormState>(() => {
    const state: FormState = {}
    for (const [key, value] of Object.entries(initialValues)) {
      state[key] = { value, touched: false }
    }
    return state
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const setValue = useCallback((field: string, value: string) => {
    setFormState(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        value,
        touched: true,
        error: validationRules?.[field]?.(value)
      }
    }))
  }, [validationRules])

  const setError = useCallback((field: string, error: string) => {
    setFormState(prev => ({
      ...prev,
      [field]: {
        value: prev[field]?.value ?? '',
        touched: prev[field]?.touched,
        error
      }
    }))
  }, [])

  const validate = useCallback(() => {
    let isValid = true
    const newState = { ...formState }

    for (const [field, state] of Object.entries(formState)) {
      const error = validationRules?.[field]?.(state.value)
      if (error) {
        isValid = false
        newState[field] = { ...state, error, touched: true }
      }
    }

    setFormState(newState)
    return isValid
  }, [formState, validationRules])

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault()
    
    if (!validate() || isSubmitting) return

    setIsSubmitting(true)
    try {
      const values = Object.fromEntries(
        Object.entries(formState).map(([key, field]) => [key, field.value])
      )
      await onSubmit?.(values)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }, [formState, validate, onSubmit, isSubmitting])

  const reset = useCallback(() => {
    const state: FormState = {}
    for (const [key, value] of Object.entries(initialValues)) {
      state[key] = { value, touched: false }
    }
    setFormState(state)
  }, [initialValues])

  const getFieldProps = useCallback((field: string) => ({
    value: formState[field]?.value || '',
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(field, e.target.value)
    },
    onBlur: () => {
      setFormState(prev => ({
        ...prev,
        [field]: { 
          value: prev[field]?.value ?? '',
          error: prev[field]?.error,
          touched: true 
        }
      }))
    }
  }), [formState, setValue])

  const hasErrors = Object.values(formState).some(field => field.error)
  const values = Object.fromEntries(
    Object.entries(formState).map(([key, field]) => [key, field.value])
  )

  return {
    formState,
    values,
    isSubmitting,
    hasErrors,
    setValue,
    setError,
    validate,
    handleSubmit,
    reset,
    getFieldProps
  }
}