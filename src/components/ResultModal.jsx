export default function ResultModal({result,targetTime}){
    return(
        <dialog className="result-modal" open>
            <h2>You {result}</h2>
            <p>
                Target Time was <strong>{targetTime}seconds.</strong>
            </p>
            <p>You stopped timer with <strong>X seconds left.</strong></p>
            <form action="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}