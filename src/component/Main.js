import React from "react";
import Slider from "./Slider";
import NewsCard from "./NewsCard";
import NavBar from "./NavBar";
import CommunitySideBar from "./CommunitySideBar";
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';



class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newsArray:[]
        }
    }
    componentDidMount=()=>{
        axios
        .get(`http://localhost:3010/news`)
        .then(result=>{
            this.setState({
                newsArray:result.data
            })
        })
        
        .catch(err=>{
            console.log(err);
        })

    }

      /*----------Render News for Specific Catagory----------*/
  // handleChange = async (query) => {
  //   const result = await axios.get(`${URL}news?q=${query}`);
  //   const filteredNews = result.data.filter((item) => {
  //     return item.image !== undefined;
  //   });

  //   this.setState({
  //     news: filteredNews,
  //   });
  // };
  /*----------Handle Each Catagory----------*/
  // handleAllNews = () => {
  //   this.componentDidMount();
  // };

  // handleSport = () => {
  //   this.handleChange("sports");
  // };

  // handleHealth = () => {
  //   this.handleChange("health");
  // };

  // handleBusiness = () => {
  //   this.handleChange("business");
  // };

  // handleEntertainment = () => {
  //   this.handleChange("entertainment");
  // };

  // handleScience = () => {
  //   this.handleChange("science");
  // };

  // handleTechnology = () => {
  //   this.handleChange("technology");
  // };

  /*----------Handle Search----------*/
  // handleSearch = async (event) => {
  //   event.preventDefault();
  //   const keyword = event.target.search.value;
  //   console.log(keyword);
  //   this.handleChange(keyword);
  //   // const url = `${URL}news?q=${keyword}`;
  //   // console.log(url);
  //   // const newsData = await axios.get(url);
  //   // console.log(newsData.data);
  //   // const filteredNews = newsData.data.filter((item) => {
  //   //   return item.image !== null;
  //   // });
  //   // this.setState({
  //   //   news: filteredNews,
  //   // });
  // };

  // searchHandler = (event) => {
  //   event.preventDefault();
  //   const search = event.target.search.value;
  //   console.log(search);
  //   let newArr = this.state.newsData.filter((item) => {
  //     if (search === "") return item;
  //     else if (item.headline.toLowerCase().includes(search.toLowerCase()))
  //       return item;
  //   });
  //   this.setState({
  //     newsData: newArr,
  //   });
  // };


    
  render(){
    const { isAuthenticated } = this.props.auth0;
      return(
          <>
         {/* { console.log(this.state.newsArray)} */}
          
          <Slider newsArray={this.state.newsArray}/>
          <NavBar />
          
          <NewsCard  newsArray={this.state.newsArray}/>
          {isAuthenticated && <CommunitySideBar />}
          

          </>
      )
  }
}

export default withAuth0(Main) 