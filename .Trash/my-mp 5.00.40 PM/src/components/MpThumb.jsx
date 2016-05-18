import React from 'react';

var MpThumb = React.createClass({

  handleClick: function(event) {
    console.log('clicked')
    console.log("mp name////" + this.props.data.name)


  },

    render: function() {

      var mpTag;
        if (this.props.data.party === "Liberal") {
            mpTag = "mp-index-tag lib"
          } else if (this.props.data.party === "Conservative"){
            mpTag = "mp-index-tag con"
          } else if (this.props.data.party === "NDP"){
            mpTag = "mp-index-tag ndp"
          } else if (this.props.data.party === "Bloc Québécois"){
            mpTag = "mp-index-tag bloc"
          } else if (this.props.data.party === "Green Party"){
            mpTag = "mp-index-tag green"
          }
        return (
            <div className="mp-index">
              <a className="mp-hover" onClick={this.handleClick}>
                <div className="image-crop">
                  <img src = {this.props.data.photo} />
                </div>
              </a>
              <div className={mpTag}>
                <span>{this.props.data.name}</span>
                <span>{this.props.data.riding}</span>
              </div> 
            </div>
          )
    }
});



export default MpThumb;