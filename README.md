# ABOUT application
The main assumption of the OrderlyAI web application is to follow trends in the developing AI sector. The number of products based on artificial intelligence is growing day by day, and tracking changing trends is very persistent and time-consuming. The tools in question can be divided into categories in which they offer services.

Application written using ReactJS with Redux, Chakra, TypeScript

# Login

For Login as a regular user:
- username: nowynowy
- password: nowynowy

# How to run

```
bash git clone https://github.com/dyrpit/orderly-ai-1.git
npm install
npm start
```

# APP Screenshots 

## Unlogged User
Basic view for unregistered users. They can browse through categories and view all available products
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/1829556a-4a75-488b-84f3-bdcbc1f9ce19)

Products list
<br />
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/add9ec9e-606e-4cae-98b6-6a7b34055262)

Product
<br />
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/2bd6a8d1-cf88-421c-9b86-9e3b389dc80c)

Login and Signup form
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/db13e190-33af-4c20-af58-3255bc8cc165)
<br/>
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/5fe40aaa-8174-4918-b4f1-5984400edabf)

We can navigate through the application using breadcrumbs
<br />
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/548a27e8-0a6d-4126-a007-deae74553991)

## Logged as regular User
Logged-in users gain additional functionalities, such as the ability to modify category names
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/d547e3fc-4eb1-49dc-8e7a-fc6e2e16509e)

We can export all the available categories and products as a JSON file
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/859fdb0a-b26e-4008-af39-cff7971a7d9b)

Once we have the exported file, or another file in the correct format, we can import it into the application to add new categories and display associated products
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/c5650ba3-e68d-42ba-bff0-526e6ccf5ae7)
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/ee2945be-f321-4b73-9c92-1b81e4735d13)

We can also log out from our account
<br/>
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/57da8c21-1f37-44bc-972b-06e24762ff94)

## Logged as admin
A logged-in admin has additional functionalities, such as the ability to delete a category along with all its associated products
<br/>
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/12edf8a0-1942-4b8f-b8e5-e3035bf1d9f0)

He also gain access to the admin panel through a toggle in the extra menu
<br/>
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/87ce9c4c-61c3-4b18-90a3-b70aaa8e0648)
<br/>
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/e57608ee-7ef5-4bf8-8805-25bab2b6eb85)

He can add new categories
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/04bb2bb4-e392-40e1-9fda-ec286cee0fb3)


He can also add new products to the categories
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/acb2b310-5167-4e92-af77-3b593448bda9)


You can navigate through all the categories and products
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/f8ea291e-70fa-47c4-94b0-69bf08b5acf0)


From the admin panel, you can also manage all the application users, change their roles, or permanently delete them
<br />
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/00a39303-92e0-4bb1-b663-a8dd0239c282)


## Available for all logged-in users
If we are logged into the application and remain inactive for 5 minutes, the session will expire, and the system will automatically log us out. We will get notification 10sec before. Inactive means we will not triger any action on redux store.


## Available for all users but currently not functioning
We have the capability to generate the entire application using the OpenAI API by making a request to chatGPT. It will provide the output in JSON format with randomly generated categories and products, replacing our data with its generated content. However, this feature is currently disabled due to the high cost of API queries to OpenAI
![image](https://github.com/rafal19987/orderly-ai-1/assets/6312438/d64e5e0b-39cc-48f8-a9ce-7edffd0cb531)

