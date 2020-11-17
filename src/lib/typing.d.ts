
/**
 * Skill component Parent Properties
 */
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

/**
 * Select element options for various types
 */
export interface StorageOption { value: string, label: string }
export type EntityOption = StorageOption
export type IntentOption = StorageOption
export type ActionOption = StorageOption