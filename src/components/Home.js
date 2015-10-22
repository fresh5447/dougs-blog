var React =require('react');

var Header = React.createClass({
    render: function() {
        return (
                <div>
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                            <h3>Douglas Walter</h3>
                            </div>
                            <div className="col-md-6">
                            </div>
                        </div>
                    </div>
                </header>
                </div>
            );
    }
});

var Carousel = React.createClass({
    render: function() {
        return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
                <div className="item active">
                    <img src="img/slide1.jpg"/>
                    <div className="carousel-caption">
                        <h4><a href="#">Slide Story One</a></h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    </div>
                </div>

                <div className="item">
                    <img src="img/slide2.jpg"/>
                    <div className="carousel-caption">
                        <h4><a href="#">Slide Story Two</a></h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. </p>
                    </div>
                </div>

                <div className="item">
                    <img src="img/slide3.jpg"/>
                    <div className="carousel-caption">
                        <h4><a href="#">Slide Story Three</a></h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. </p>
                    </div>
                </div>

                <div className="item">
                    <img src="img/slide4.jpg"/>
                    <div className="carousel-caption">
                        <h4><a href="#">Slide Story Four</a></h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    </div>
                </div>

                <div className="item">
                    <img src="img/slide5.jpg"/>
                    <div className="carousel-caption">
                        <h4><a href="#">Slide Story Five</a></h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    </div>
                </div>

            </div>

            <ul className="list-group slider-list col-sm-4">
                <li data-target="#myCarousel" data-slide-to="0" className="list-group-item active"><img src="img/slide1.jpg" className="img-slide img-thumbnail"/>
                    <h4>Slide Story One</h4>
                    <p>Tempor invidunt ut labore invidunt ut labor</p>
                </li>
                <li data-target="#myCarousel" data-slide-to="1" className="list-group-item"><img src="img/slide2.jpg" className="img-slide img-thumbnail"/>
                    <h4>Slide Story Two</h4>
                    <p>Consetetur sadipscing elitr, sed diam sadipscing elitr</p>
                </li>
                <li data-target="#myCarousel" data-slide-to="2" className="list-group-item"><img src="img/slide3.jpg" className="img-slide img-thumbnail"/>
                    <h4>Slide Story Three</h4>
                    <p>Eirmod tempor invidunt ut labore consetetur sadipscing</p>
                </li>
                <li data-target="#myCarousel" data-slide-to="3" className="list-group-item"><img src="img/slide4.jpg" className="img-slide img-thumbnail"/>
                    <h4>Slide Story Four</h4>
                    <p>Lorem ipsum dolor sit amet consetetur sed diam nonumy</p>
                </li>
                <li data-target="#myCarousel" data-slide-to="4" className="list-group-item"><img src="img/slide5.jpg" className="img-slide img-thumbnail"/>
                    <h4>Slide Story Five</h4>
                    <p>Lorem ipsum dolor sit amet consetetur magna aliquyam erat</p></li>
            </ul>

            <div className="carousel-controls">
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>

        </div>
            );
    }
});

var HomeBody = React.createClass({
    render: function() {
        return (
        <div className="row">
            <div className="col-md-8">
                <div className="well blog-post">
                    <h3><a href="post.html">Blog Post One</a></h3>
                    <p className="post-info"><i className="glyphicon glyphicon-time"></i> Posted by Brad Traversy on August 21, 2014 at 10:00 PM</p>
                
                    <img src="../img/blog1.jpg" className="img-responsive"/>
          
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>
                    <a className="btn btn-primary" href="post.html">Read More <span className="glyphicon glyphicon-chevron-right"/></a>
                </div>
                <div className="well blog-post">
                    <h3><a href="post.html">Blog Post Two</a></h3>
                    <p className="post-info"><i className="glyphicon glyphicon-time"></i> Posted by Brad Traversy on August 21, 2014 at 10:00 PM</p>

                    <img src="img/blog2.jpg" className="img-responsive"/>
     
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>
                    <a className="btn btn-primary" href="post.html">Read More <span className="glyphicon glyphicon-chevron-right"/></a>
                </div>
                <div className="well blog-post">
                    <h3><a href="post.html">Blog Post Three</a></h3>
                    <p className="post-info"><i className="glyphicon glyphicon-time"></i> Posted by Brad Traversy on August 21, 2014 at 10:00 PM</p>
       
                    <img src="img/blog3.jpg" className="img-responsive"/>
          
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>
                    <a className="btn btn-primary" href="post.html">Read More <span className="glyphicon glyphicon-chevron-right"/></a>
                </div>

                <ul className="pager">
                    <li className="previous">
                        <a href="#">&larr; Older</a>
                    </li>
                    <li className="next">
                        <a href="#">&rarr; Next</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-4">
                <div className="well">
                    <h4>Blog Search</h4>
                    <div className="input-group">
                        <input type="text" className="form-control"/>
                        <span className="input-group-btn"/>
              <button className="btn btn-default" type="button">
                <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </div>
                </div>
                <div className="well">
                    <h4>Categories</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-unstyled">
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-unstyled">
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="well">
                    <h4>Sidebar Widget</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
                </div>
            </div>
        </div>
            );
    }
});

var Home = React.createClass({

    render: function() {
        return (
        <div>
           <Header/>
           <Carousel/>
           <HomeBody/>
        </div>
          );
    }
});

module.exports=Home