import React from "react";
import "./Navbar.scss";
import { CircleHelp } from "lucide-react";
import { BarChart2 } from "lucide-react";
import { Settings } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <button>
          <CircleHelp />
        </button>
        <button>
          <BarChart2 />
        </button>
        <button>
          <Settings />
        </button>
      </div>
      <div className="middle">
        <h1>Wordle</h1>
      </div>
      <div className="right">
        <button>
          <h3>Login</h3>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
