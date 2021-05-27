export interface LoginStateInterface {
  signIn( email: string, password: string ): void;
  signUp( email: string, password: string ): void;
  passwordReset?(): void;
  emailVerification?(): void;
}

export interface CharacterCreationInterface {
  creation?(): void;
  submit?(): void;
}

export interface TitleInterface {
  title(): void;
}
