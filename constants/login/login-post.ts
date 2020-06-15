export abstract class LoginPost {
  url: string
  abstract get formData(): FormData

  constructor(url: string) {
    this.url = url
  }
}

export class EmailLoginPost extends LoginPost {
  email: string
  password: string

  get formData(): FormData {
    const formData = new FormData()
    formData.append('grant_type', 'password')
    formData.append('username', this.email)
    formData.append('password', this.password)
    return formData
  }

  constructor(url: string, email: string, password: string) {
    super(url)
    this.email = email
    this.password = password
  }
}

export class SocialLoginPost extends LoginPost {
  code: string

  get formData(): FormData {
    const formData = new FormData()
    formData.append('grant_type', 'socialite')
    formData.append('code', this.code)
    return formData
  }

  constructor(url: string, code: string) {
    super(url)
    this.code = code
  }
}
