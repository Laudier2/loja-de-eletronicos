import React, { useState, useEffect } from 'react';
import Slids from './Slids';
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { CardActions, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

const url = (process.env.REACT_APP_LINK_API)

const useStyles = makeStyles(() => ({
  icones: {
    width: 16,
  },
  icones_marg: {
    marginRight: '40%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

const Consumo = () => {

  const classes = useStyles();

const [resit, fun] = useState([])

  useEffect(() => {
    const Process = async () => {
      const response = await fetch(`${url}`)
      const data = await response.json()
      fun(data)
    }
    Process()
  }, [])

  const chenger = (e) => {
    localStorage.setItem('name', JSON.stringify(e.title))
    localStorage.setItem('price', JSON.stringify(e.price))
    localStorage.setItem('imagem', JSON.stringify(e.image1))
    localStorage.setItem('descricao', JSON.stringify(e.description))
  }

  useEffect(() => {
    return
  },[])

  const favorito = () => {
    localStorage.setItem()
  }

  return (
    <div>
      <Slids />
      <div classNameName="mt-5">
          <div className="container col-sm-8">
              {resit.map(res => (
                <div className="div-lado">
                  <div key={res.id}>
                    <div className="box1 mt-3">
                      <div className="box1 card">
                        <img src={res.image1} alt="" className="img"/>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites" className={classes.icones_marg}>
                            <FavoriteIcon className={classes.icones} />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon className={classes.icones} />
                          </IconButton>
                        </CardActions>
                        <h5 className="H5">{res.title}</h5>
                        <small className={classes.title}>R$ {res.price}</small>
                        
                        
                        {/*<a href="https://checkout.chec.io/UMqoMb"data-chec-product-id="UMqoMb" className="btn btn-primary btn-block">Descrição</a>*/}
                        <Link to="/ds" onClick={() => chenger(res)} >{/*target="_blank"*/}
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
