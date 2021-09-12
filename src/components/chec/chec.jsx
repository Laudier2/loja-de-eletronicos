import React, { useState, useEffect } from 'react';
import Slids from '../slids/slids'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { commerce } from '../../lib/commerce';
import './chec.css'

const useStyles = makeStyles(() => ({
  icones: {
    width: 16,
  },
  icones_marg: {
    marginRight: '40%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  title_price: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  avatar: {
    backgroundColor: red[500],
  },
  img: {
    width: 70,
    height: 150,
    margin: 'auto',
  },
}))

const chenger = (e) => {
  localStorage.setItem('name', JSON.stringify(e.name))
  localStorage.setItem('price', JSON.stringify(e.price.formatted_with_symbol))
  localStorage.setItem('imagem', JSON.stringify(e.assets[0].url))
  localStorage.setItem('imagem1', JSON.stringify(e.assets[1].url))
  localStorage.setItem('imagem2', JSON.stringify(e.assets[2].url))
  localStorage.setItem('imagem3', JSON.stringify(e.assets[3].url))
  localStorage.setItem('descricao', JSON.stringify(e.description))
}

const Consumo = () => {

  const [ chec, setChec ] = useState([])

  useEffect(() => {
    const Proc = async () => {
      const product = await commerce.products.list()
              
      setChec((product && product.data))
    }
    Proc()
  }, [])

  const classes = useStyles();


  useEffect(() => {
    return
  },[])

  const handlePost = (r) => {
    console.log(r)
  }

  const [ busca, setBusca ] = useState('')

  //const checFilter = chec.filter((res) => res.startsWith(busca))

  //console.log(checFilter)

  return (
    <div>
      
      <Slids />
        <form className="form-inline my-2 my-lg-0">
            <input 
            className="form-control mr-sm-2 col-12" 
            value={busca}
            onChange={(e) => setBusca(e.target.value)} 
            type="search" 
            placeholder="Pesquisa" 
            aria-label="Search"
          />
        </form>
      <div classNameName="mt-5 conatiner">
          <div className="container col-sm-9 mr">
              {chec.map(res => (
                <div className="div-lado">
                  <div key={res.id}>
                    <div className="box1 mt-4">
                      <div className="box1 card">
                        <img src={res.assets[0].url} alt="imagem" className={classes.img}/>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites" className={classes.icones_marg}>
                            <FavoriteIcon className={classes.icones} onClick={() => handlePost(res.id)} />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon className={classes.icones} />
                          </IconButton>
                        </CardActions>
                        <h5 className={classes.title}>{res.name}</h5>
                        <small className={classes.title_price}>R$ {res.price.formatted_with_symbol}</small>   
                        
                        {/*<a href="https://checkout.chec.io/UMqoMb"data-chec-product-id="UMqoMb" className="btn btn-primary btn-block">Descrição</a>*/}
                        <Link to="/desc" onClick={() => chenger(res)} >{/*target="_blank"*/}
                          <button className="btn btn-primary btn-block">Descrição</button>
                        </Link>                      
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5"></div>
        </div>
    </div>
  );
}

export default Consumo;
