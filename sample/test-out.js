import { createSignal, createEffect, on } from "solid-js";
export default ()=>{
    const [state, setState] = createSignal(0);
    let [$$__REACTOR_UNIQUE_VAR_1, $$__REACTOR_UNIQUE_VAR_0] = createSignal(0);
    const rerender = ()=>{
        return $$__REACTOR_UNIQUE_VAR_0(((a)=>~a
        )($$__REACTOR_UNIQUE_VAR_1()));
    };
    createEffect(on([
        state,
        $$__REACTOR_UNIQUE_VAR_1
    ], ()=>{
        return console.log(state());
    }));
    const myRef = {};
    return (<>

      <button onClick={()=>{
        return setState(state() * 2);
    }} style={`color: red`}/>



      {state()}



      <div style={{
        "margin-right": "5rem"
    }}>

        <span ref={myRef.current}/>

      </div>

    </>);
};
