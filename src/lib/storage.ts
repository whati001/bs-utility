/**
 * Define supported storage types
 */
interface StorageOption {
  value: string,
  label: string
}

const STORAGES: StorageOption[] = [
  { 'value': 'session', 'label': 'Session' },
  { 'value': 'temp', 'label': 'Temp' },
  { 'value': 'user', 'label': 'User' }
]

export { StorageOption, STORAGES }