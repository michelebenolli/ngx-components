export interface Token {
    token: string;
    refreshToken: string;
    refreshTokenExpiryTime?: string; // TODO: It was "Date", check...
    permissions: string[];
}
