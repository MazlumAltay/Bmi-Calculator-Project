import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    borderTop: '8px solid #FF9800',
    width: '90%',   
    maxWidth: 'none',
    borderRadius: '3px 3px 0px 0px'
} 

class DialogBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            dialogOpen: false
        }
    }
    handleOpen = () => {
        this.setState({dialogOpen: true});
    }
    handleClose = () => {
        this.setState({dialogOpen: false});
    }
    render(){
        const dialogActions = [
            <FlatButton 
                label="Kapat"
                onClick={this.handleClose}
            />,
            <FlatButton 
                label="Daha Fazlası İçin..."
                primary={true}
                href="https://sagligim.gov.tr/index.php"
            />
        ];       
        return(
            <div>
                <RaisedButton 
                    label="Yardıma mı ihtiyacınız var?"
                    onClick={this.handleOpen}
                    backgroundColor={this.props.btnBGColor}
                    fullWidth={true}
                />
                <Dialog 
                    open={this.state.dialogOpen}
                    actions={dialogActions}
                    contentStyle={styles}
                    model={true}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <h1 className="dialog-h1">Yetişkinler için Vücut Kitle İndeksi (BMI)</h1>
                    <p className="dialog-p">18,5 ila 24,9 (yeşil) bir BMI sağlıklı kabul edilir. 25 ila 29.9 (sarı) bir BMI aşırı kilolu olarak kabul edilir. 30 veya daha yüksek (kırmızı) bir BMI obez olarak kabul edilir. Vücut kitle indeksinde büyük bir değişiklik olan bir kişi, aşırı kilolu veya zayıf olmasa bile, nedeni bulmak için değerlendirilmelidir. 18.5 ila 24,9 (yeşil) bir BMI sağlıklı kabul edilir. 25 ila 29.9 (sarı) BMI aşırı kilolu olarak kabul edilir. 30 veya daha yüksek (kırmızı) bir BMI obez olarak kabul edilir. Vücut kitle indeksinde büyük bir değişiklik olan bir kişi, aşırı kilolu veya zayıf olmasa bile, nedeni bulmak için değerlendirilmelidir. 18.5 ila 24,9 (yeşil) bir BMI sağlıklı kabul edilir. 25 ila 29.9 (sarı) bir BMI aşırı kilolu olarak kabul edilir. 30 veya daha yüksek (kırmızı) bir BMI obez olarak kabul edilir. Vücut kitle indeksinde büyük bir değişiklik olan bir kişi, fazla kilolu veya zayıf olmasa bile sebebini bulmak için değerlendirilmelidir.</p>
                </Dialog>
            </div>
        );
    }

} 

export default DialogBox;