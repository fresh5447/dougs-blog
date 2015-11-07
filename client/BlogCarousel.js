var React = require('react');

var BlogCarousel = React.createClass({
    render: function(){
        return(
        <div id="myCarousel" name="carousel slide" data-ride="carousel">

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
            )
    }
});

module.exports = BlogCarousel;