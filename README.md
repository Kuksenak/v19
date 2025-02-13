# V19

## Create app
```bash
  npm install -g @angular/cli
```
```bash 
  ng new <app_name>
```
```bash 
  npm install -g angular-cli-ghpages
```
```bash 
"outputPath": "dist/your-app-name",
"baseHref": "/your-repo-name/"
```
## Deploy
```bash ng new ng build --configuration production --base-href "https://kuksenak.github.io/v19/"```
```bash ng new npx angular-cli-ghpages --dir=dist/v19/browser```

