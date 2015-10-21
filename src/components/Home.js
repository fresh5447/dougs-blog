var React =require('react');

var Home = React.createClass({
    render: function() {
        return (
				<div>
<body>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                <h3>Douglas Walter</h3>
                </div>
                <div class="col-md-6">
                </div>
            </div>
        </div>
    </header>
    <div class="container container-main">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Dropdown <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Link One</a></li>
                                <li><a href="#">Link Two</a></li>
                                <li><a href="#">Link Three</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div>
        </nav>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="item active">
                    <img src="img/slide1.jpg">
                    <div class="carousel-caption">
                        <h4><a href="#">Slide Story One</a></h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    </div>
                </div>
                <!-- End Item -->
                <div class="item">
                    <img src="img/slide2.jpg">
                    <div class="carousel-caption">
                        <h4><a href="#">Slide Story Two</a></h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. </p>
                    </div>
                </div>
                <!-- End Item -->
                <div class="item">
                    <img src="img/slide3.jpg">
                    <div class="carousel-caption">
                        <h4><a href="#">Slide Story Three</a></h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. </p>
                    </div>
                </div>
                <!-- End Item -->
                <div class="item">
                    <img src="img/slide4.jpg">
                    <div class="carousel-caption">
                        <h4><a href="#">Slide Story Four</a></h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    </div>
                </div>
                <!-- End Item -->
                <div class="item">
                    <img src="img/slide5.jpg">
                    <div class="carousel-caption">
                        <h4><a href="#">Slide Story Five</a></h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    </div>
                </div>
                <!-- End Item -->
            </div>
            <!-- End Carousel Inner -->
            <ul class="list-group slider-list col-sm-4">
                <li data-target="#myCarousel" data-slide-to="0" class="list-group-item active"><img src="img/slide1.jpg" class="img-slide img-thumbnail">
                    <h4>Slide Story One</h4>
                    <p>Tempor invidunt ut labore invidunt ut labor</p>
                </li>
                <li data-target="#myCarousel" data-slide-to="1" class="list-group-item"><img src="img/slide2.jpg" class="img-slide img-thumbnail">
                    <h4>Slide Story Two</h4>
                    <p>Consetetur sadipscing elitr, sed diam sadipscing elitr</p>
                </li>
                <li data-target="#myCarousel" data-slide-to="2" class="list-group-item"><img src="img/slide3.jpg" class="img-slide img-thumbnail">
                    <h4>Slide Story Three</h4>
                    <p>Eirmod tempor invidunt ut labore consetetur sadipscing</p>
                </li>
                <li data-target="#myCarousel" data-slide-to="3" class="list-group-item"><img src="img/slide4.jpg" class="img-slide img-thumbnail">
                    <h4>Slide Story Four</h4>
                    <p>Lorem ipsum dolor sit amet consetetur sed diam nonumy</p>
                </li>
                <li data-target="#myCarousel" data-slide-to="4" class="list-group-item"><img src="img/slide5.jpg" class="img-slide img-thumbnail">
                    <h4>Slide Story Five</h4>
                    <p>Lorem ipsum dolor sit amet consetetur magna aliquyam erat/p></li>
            </ul>
            <!-- Controls -->
            <div class="carousel-controls">
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>
        </div>
        <!-- End Carousel -->
        <div class="row">
            <div class="col-md-8">
                <div class="well blog-post">
                    <h3><a href="post.html">Blog Post One</a></h3>
                    <p class="post-info"><i class="glyphicon glyphicon-time"></i> Posted by Brad Traversy on August 21, 2014 at 10:00 PM</p>
                    <hr>
                    <img src="img/blog1.jpg" class="img-responsive">
                    <hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>
                    <a class="btn btn-primary" href="post.html">Read More <span class="glyphicon glyphicon-chevron-right"></a>
                </div>
                <div class="well blog-post">
                    <h3><a href="post.html">Blog Post Two</a></h3>
                    <p class="post-info"><i class="glyphicon glyphicon-time"></i> Posted by Brad Traversy on August 21, 2014 at 10:00 PM</p>
                    <hr>
                    <img src="img/blog2.jpg" class="img-responsive">
                    <hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>
                    <a class="btn btn-primary" href="post.html">Read More <span class="glyphicon glyphicon-chevron-right"></a>
                </div>
                <div class="well blog-post">
                    <h3><a href="post.html">Blog Post Three</a></h3>
                    <p class="post-info"><i class="glyphicon glyphicon-time"></i> Posted by Brad Traversy on August 21, 2014 at 10:00 PM</p>
                    <hr>
                    <img src="img/blog3.jpg" class="img-responsive">
                    <hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>
                    <a class="btn btn-primary" href="post.html">Read More <span class="glyphicon glyphicon-chevron-right"></a>
                </div>
                <!-- Pager -->
                <ul class="pager">
                    <li class="previous">
                        <a href="#">&larr; Older</a>
                    </li>
                    <li class="next">
                        <a href="#">&rarr; Next</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-4">
                <div class="well">
                    <h4>Blog Search</h4>
                    <div class="input-group">
                        <input type="text" class="form-control">
                        <span class="input-group-btn">
              <button class="btn btn-default" type="button">
                <span class="glyphicon glyphicon-search"></span>
                        </button>
                        </span>
                    </div>
                </div>
                <div class="well">
                    <h4>Categories</h4>
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="list-unstyled">
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
                        <div class="col-md-6">
                            <ul class="list-unstyled">
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
                <div class="well">
                    <h4>Sidebar Widget</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
                </div>
            </div>
        </div>
    </div>

</body>
				</div>
        	);
    }
});

module.exports = Home