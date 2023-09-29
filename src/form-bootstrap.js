import React from "react";

export default function FromBootstrap(){
    return(
        <div className="mt-3 mx-auo p-3" style={{width:'400px', background:'#cee'}}>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="login">Email</label>
                    <input type="text" id="login" name="login" className="form-control"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="pswd">Password</label>
                    <input type="password" id="pswd" name="pswd" className="form-control"/>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="select1">Select</label>
                    <input id="select1" name="select1" className="form-select"/>
                    
                </div>
            </form>
        </div>
    )
}