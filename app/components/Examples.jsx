var React = require('react');
var {Link} = require('react-router');

var Examples =  (props)=> {
    return (
      <div>
     <h1 className="text-center page-title">Examples</h1>
     <p> Here are a few examples:</p>
     <ol>
         <li>
            <Link to='/?location=Dhaka'>Dhaka</Link>
         </li>
         <li>
             <Link to="/?location=Khulna">Khulna</Link>
         </li>

     </ol>
      </div>
    );
  }
;

module.exports = Examples;
