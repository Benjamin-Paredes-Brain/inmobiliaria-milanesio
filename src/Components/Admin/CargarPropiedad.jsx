import { uploadFile } from "../../Firebase/config.js"
export const CargarPropiedad = () => {

    return (
        <div>
            <input type="file" onChange={e => uploadFile(e.target.files[0])} />
        </div>
    )
}