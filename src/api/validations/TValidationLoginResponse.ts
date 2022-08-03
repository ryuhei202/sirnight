export type TValidationLoginResponse = {
  readonly errors: string[];
  readonly isRegistered: boolean;
  readonly memberId: number | null;
};
