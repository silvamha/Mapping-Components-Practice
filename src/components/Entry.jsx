import React from "react";


const Entry = (props) =>{
return <dl className="dictionary">
<div className="term">
  <dt>
    <span className="emoji" role="img" aria-label={props.name}>
      {props.emoji}
    </span>
    <span>Tense Biceps</span>
  </dt>
  <dd>
    {props.meaning}
  </dd>
</div>
</dl>
}

export default Entry;