import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const BmiWiki = (props) => {
    const DialogActions = [
        <FlatButton 
            label="Kapat"
            onClick={props.close}
        />,
        <FlatButton 
            label="Wiki'de daha fazlası var..!"
            primary={true}
            onClick={props.close}
            href="https://tr.wikipedia.org/wiki/V%C3%BCcut_kitle_indeksi"
        />
    ];
    return(
        <div>
            <Dialog 
                open={props.open}
                actions={DialogActions}
                onRequestClose={props.close}
                model={true}
                autoScrollBodyContent={true}                    
            >
                <h1>Vucut Kitle Endeksi (BMI)</h1>
                <p>Vücut kitle indeksi veya Quetelet indeksi, bir bireyin kütlesinden ve boyundan türetilen bir değerdir. BMI, vücut ağırlığının vücut boyunun karesine bölünmesi olarak tanımlanır ve evrensel olarak kg/m² birimleriyle ifade edilir ve kütlenin kilogram ve yüksekliğin metre cinsinden sonucu elde edilir.</p>
            </Dialog>
        </div>
    );
}


export default BmiWiki;