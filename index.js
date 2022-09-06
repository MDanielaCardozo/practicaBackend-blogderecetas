import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import './src/database';
import router from './src/routes/recetas.routes';

const app = express();

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
    console.log(`Mi backend está en el puerto ${app.get('port')}`);
})

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));

app.use('/apirecetas', router)
