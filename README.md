# My records collection

## Configuration

My records collection currently uses Firebase for his data storage.

To set it up, you will need those two environment variables:

- `VITE_FIREBASE_API_KEY`: The API key to your firebase project;
- `VITE_FIREBASE_DATABASE_URL`: The URL to your firebase project;

## Deploying to production

To deploy on firebase hosting:

1. Set the requested environment variables in the .env.production file; 
2. In the `front` folder, run the build command: `npm run build`. This should create a `dist` folder;
3. Run the `firebase deploy` command.
