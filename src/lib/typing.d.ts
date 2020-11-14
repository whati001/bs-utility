export interface SkillProps<T> {
  bp: any
  initialData: T
  onDataChanged: (data: T) => void
  onValidChanged: (canSubmit: boolean) => void
  resizeBuilderWindow: (newSize: 'normal' | 'large' | 'small') => void
  contentLang: string
  defaultLanguage: string
  languages: string[]
}
