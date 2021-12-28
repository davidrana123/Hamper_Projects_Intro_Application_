import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";
import "../../Commom.css";

function Media() {
  return (
    <div id="media" className="media">
      <TableHead>
        <TableRow>
          <TableCell>
            <a href="https://www.linkedin.com/in/david-rana-81882a193/">
              LinkedIn
            </a>
          </TableCell>

          <TableCell>
            <a href="https://github.com/davidrana123">GitHub</a>
          </TableCell>

          <TableCell>
            <a href="https://www.facebook.com/joy.rana.31586">Facebook</a>
          </TableCell>

          <TableCell>
            <a href="https://www.instagram.com/david_rana__/">Instagram</a>
          </TableCell>
        </TableRow>
      </TableHead>
    </div>
  );
}

export default Media;
