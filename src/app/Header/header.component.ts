import { Component, OnInit } from '@angular/core';
//import {getNodeRpcURL} from "../Shared/utils";
import {Commitment, Connection, ConnectionConfig} from "@solana/web3.js";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{

  constructor() { }

  ngOnInit()
  {
    // Try either this or Websockets

  }
}
