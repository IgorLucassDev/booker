<br>

<div align="center">

![Logo (3)](https://github.com/IgorLucassDev/booker/assets/62673756/1a2d1add-5ae2-4441-ad35-a4a3477e0441)


  <h1 align="center">Booker</h1>
  
  <p align="center">
    <strong>Booker is a simple book lister app</strong>
  </p>

</div>




## Run




### clone repository
```bash
git clone https://github.com/IgorLucassDev/booker.git
```

```bash
cd booker
```

### Install server dependences
```bash
cd server
```

```bash
npm install
```

This will install the necessary dependencies.

### Database setup
* Create a <a href="https://www.mongodb.com/">MongoDB</a> account and setup database
* Create a new `.env` file 
* Add your database connection link `DATABASE_URL="mongodb+srv://<username>:<Password>@<ClusterName>.9bydsrc.mongodb.net/<DatabaseName>?retryWrites=true&w=majority&appName=<Cluster>"`

### Starting Server
Go to `./server/src`

Run
```bash
node index.js
```




