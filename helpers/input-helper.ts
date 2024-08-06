export const inputProps = {
  modelValue: {},
  label: String,
  helpText: String,
  errors: { type: Array, default: () => [] },
  type: { type: String, default: 'text' },
  min: { type: Number },
  max: { type: Number },
  focus: { type: Boolean, default: false },
  index: { type: Number }
}

export const inputEmits = ['update:modelValue']

