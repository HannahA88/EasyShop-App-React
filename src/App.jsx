import logo from "./logo.svg";
import "./App.css";
import Type from "./Type";
import Input from "./input";
import Quantity from "./quantity";
import AddButton from "./addbutton";
import Components from "./components";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Component from "./animation";
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Map from './pages/Map';
import HomePage from './pages/HomePage';
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TelegramIcon,
  ViberIcon,
  WhatsappIcon,
} from "react-share";


function App() {
 
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    type: "",
  });

  const navigate = useNavigate();

  function handleOnSubmit(e) {
  document.querySelector('form.Wrap').reset()
   }

  useEffect(() => {
    if (localStorage.getItem("productList")) {
      setProductList(JSON.parse(localStorage.getItem("productList")));
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>EasyShop</div>
      </header>

      {/* <form className="Wrap" onSubmit={(() => handleOnSubmit)}> */}

    <Box className="Wrap" onSubmit={(() => handleOnSubmit)}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate  
        autoComplete="off"
    > 
    <AddButton product={product} setProductList={setProductList} setProduct={setProduct} />
    <Input setProduct={setProduct} product={product} />
    <Quantity setProduct={setProduct} product={product} />
    <Type setProduct={setProduct} className="type" />
    </Box>
    <Component />
       
    {productList.length ? (
      <div className="checklist">
    <Components
        productList={productList}
        setProductList={setProductList}
    />
    </div>
      ): (<h1 className="products">add me</h1>)} 
        <div className="Map">
          <button className="mapbtn"><Link to="/map">Find the Nearest Shop</Link></button>
          <Link to="/"></Link>
    </div>

    <button className="btns" onClick={() => navigate(-1)}>Go back</button>
    <button className="btns" onClick={() => navigate(1)}>Go forward</button>

    <Routes>
        <Route index element={<HomePage />} />
        <Route path="/map" element={<Map />}></Route>
    </Routes>

      <div className="share">
    <WhatsappShareButton url={'https://web.whatsapp.com/send?text=GitHub%3A%3A%20http%3A%2F%2Fgithub.com'}>
        <WhatsappIcon size={32} round={true}/>
    </WhatsappShareButton>

    <EmailShareButton>
        <EmailIcon size={32} round={true} />
    </EmailShareButton>

    <FacebookShareButton url={"https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=https%3A%2F%2Fblog.hubspot.com%2Fblog%2Ftabid%2F6307%2Fbid%2F29544%2Fthe-ultimate-cheat-sheet-for-creating-social-media-buttons.aspx&display=popup&ref=plugin&src=share_button"} >
        <FacebookIcon size={32} round={true} />
    </FacebookShareButton>

    <TelegramShareButton url={"https://telegram.org/js/telegram-widget.js?19"}>
        <TelegramIcon size={32} round={true} />
    </TelegramShareButton>

    <ViberShareButton url={"https://www.addtoany.com/add_to/viber?linkurl=https%3A%2F%2Fwww.example.com%2Fpage.html&linkname=Example%20Page"}>
        <ViberIcon size={32} round={true} />
    </ViberShareButton>

    <RedditShareButton url={"http://www.reddit.com/submit?url=https://stackoverflow.com/questions/24823114/post-to-reddit-via-url&title=Post%20to%20Reddit%20via%20URL"}>
        <RedditIcon size={32} round={true} />
    </RedditShareButton>
    </div>

    <footer className="App-footer">
      <p className="Rights">Copyright 2022 by HannaA. All Rights Reserved.</p>
        <img src={logo} className="logo space" alt="" />
    </footer>
    </div>
  );
}

export default App;

{/* <img src={applogo} className="Applogo" alt="" /> */}


