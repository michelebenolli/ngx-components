export interface Token {
    token: string;
    refreshToken: string;
    refreshTokenExpiryTime?: string;
    permissions: string[];
}
