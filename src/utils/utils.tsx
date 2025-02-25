export function isElectron() {
  // Renderer process
  if (typeof window !== 'undefined' && typeof window.process === 'object') {
    return true;
  }

  // Main process
  if (
    typeof process !== 'undefined' &&
    typeof process.versions === 'object' &&
    !!process.versions.electron
  ) {
    return true;
  }

  // Detect the user agent when the `nodeIntegration` option is set to true
  if (
    typeof navigator === 'object' &&
    typeof navigator.userAgent === 'string' &&
    navigator.userAgent.indexOf('Electron') >= 0
  ) {
    return true;
  }

  return false;
}

export function trimString(name: String, maxLength = 18) {
  return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
}

export function middleEllipsis(str: string, len: number) {
  return `${str.substr(0, len)}...${str.substr(str.length - len, str.length)}`;
}
