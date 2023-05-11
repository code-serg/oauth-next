

<div style="background-color: #0D1526; display: flex; justify-content: center; align-items: center; padding: 10px; margin-bottom: 10px">
  <img src="./public/cs-logo-002.png" width="50" alt="logo">
</div>

# Next.js 13 - OAuth with Google and GitHub
A simple implementation of OAuth authentication on Next.js 13. 
Login with either Google or Github and get the user session data.

## API Credentials
The app uses Google and Github as OAuth providers.
1. Setup Google Cloud at https://console.cloud.google.com/
   * Create new project and select it
    * Search / navigate to "OAuth consent screen" > select "External" and create
      * Input app name and contact/developer email
      * Scope:Add auth/userinfo/email and auth/userinfo/profile
      * Add Test user - This is the google email used to login to the application
      * Done with OAuth
    * Navigate to "Credentials"
      * + Create Credentials
      * Select OAuth Client ID 
      * Web Application
      * Authorized JavaScript origins: set to http://localhost:3000
      * Authorizes redirect URIs, set (2):
        * http://localhost:3000
        * http://localhost:3000/api/auth/callback/google
      * Copy the client id and secret

2. Setup GitHub at https://github.com
   * Go to your account's Settings > Developer Settings
   * Generate credentials for a new app
   * Copy the client id and secret


## Usage
1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
```
2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Create a `".env.local"` file in the root directory of the project with the following content
```
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=google_ID_for_your_app_goes_here
GOOGLE_CLIENT_SECRET=google_secret_for_your_app_goes_here

GITHUB_CLIENT_ID=github_ID_for_your_app_goes_here
GITHUB_CLIENT_SECRET=github_secret_for_your_app_goes_here
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) on your browser


## Acknowledgments / References
  * [https://www.youtube.com/watch?v=6lCXM11Tgyg] (Next.js 13 Google Login (NextAuth V4 / TypeScript Tutorial) by Cooper Codes)
  * [https://next-auth.js.org/configuration/initialization#route-handlers-app]
  * [https://console.cloud.google.com/]
  * [https://github.com/settings/developers]

