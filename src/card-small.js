import React from "react";
import './card-small.css';

export default function CardSmall ({ growth, pageViews, icon}) {
    return (
        <div class="card-small">
                    <p className="card-small-views">Page Views</p>
                    <p className="card-small-icon">
                        <img src={icon} alt="" />
                    </p>
                    <p className="card-small-number">{pageViews}</p>
                    <p className="card-small-percentage">
                        <span>
                             <img src="images/icons8-arriba-10.png" alt="" />
                              {growth}%
                        </span>
                    </p>
                </div>
    )
}

