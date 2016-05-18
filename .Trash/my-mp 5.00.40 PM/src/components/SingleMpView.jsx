import React from 'react';
import MpHeader from './MpHeader.jsx';
import ConstituencyAddress from './ConstituencyAddress.jsx';
import MpFooter from './MpFooter.jsx';


class SingleMpView extends React.Component {
  render() {
    return (
      <div>
        <div className="body">
          <main className="main">
            <div className="main-body">
              <section>      
               <MpHeader />
                <div className="row-container">
                  <ConstituencyAddress />
                </div>
              </section>
            </div>
          </main>
        </div>
        <MpFooter />   
      </div>
    )
  }
  
}

export default SingleMpView;