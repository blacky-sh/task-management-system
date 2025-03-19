# task-management-system

A task management system with auth with jwt and RBAC built using MERN stack.

## App Demo

![demo video](https://github.com/blacky-sh/task-management-system/blob/c2db0f109409a21660cea21edbbbb7babd3b576d/projectDemo.gif)

## Ui wireframes

- [https://excalidraw.com/#json=M_3HqmOmtdZZnku6DkgSb,6ol6NgjQ7_RGAOwOlwtXyw](https://excalidraw.com/#json=M_3HqmOmtdZZnku6DkgSb,6ol6NgjQ7_RGAOwOlwtXyw)

## Api Documentation

- **Users/Auth Api**: [https://documenter.getpostman.com/view/37989181/2sAYkEpKBX](https://documenter.getpostman.com/view/37989181/2sAYkEpKBX)

- **Tasks Api**: [https://documenter.getpostman.com/view/37989181/2sAYkEpKBa](https://documenter.getpostman.com/view/37989181/2sAYkEpKBa)

## Installation/ Setup

### Setup .env file in the root directory

```js
PORT = . . .
MONGO_URI = . . .
JWT_SECRET = . . .
NODE_ENV = . . . //developemet or production
MAILTRAP_TOKEN =  . . .
CLIENT_URL =  . . .
```

### Build the app

```shell
npm run build
```

### run development server for backend

```shell
npm run dev
```

### Go to frontend folder and run development server

```shell
cd ./frontend
npm run dev
```

## Mailtrap Integration (Free Plan Limitation)

**Important:** The Mailtrap integration feature, specifically sending emails through this application, is currently limited to the email address associated with the API key used. This is due to the constraints of the free Mailtrap plan.

**To use this feature:**

* Ensure you are using the API key from the Mailtrap account you created.
* The sender and recipient email addresses must match the email address associated with the API key.

I apologize for any inconvenience this may cause. I am exploring options to expand this functionality in the future.

