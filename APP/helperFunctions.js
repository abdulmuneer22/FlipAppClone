
import firebase from 'firebase'

export function LoginToFirebase (){

var email = 'test@test.com'
var password = '12345678'
    
firebase.auth().signInWithEmailAndPassword(email,password)



    
};


export function getProductInformationFromFlipkartAPI(PID){
    //PID -> product code
    
    var url = 'https://affiliate-api.flipkart.net/affiliate/product/json?id='+PID 
    
    
    fetch(
    url,
    {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Fk-Affiliate-Token':'0bf858551f7948ee8ccd05fce1248340',
    'Fk-Affiliate-Id':'backtopoc'
    }
    }
    )
    .then((res) => res.json())
    .then((data) => {
    var productData = data
    //pushing current data to firebase as JSON Tree   
    firebase.database().ref('Affiliate/data/'+PID).update({_productData : productData}); 
    })
    //error for sign In to FB database
    .catch((err) => {
    console.warn(err);
    });
  }



export function getImages(){
    var url = 'Affiliate/data/'+PID+'/_currentObj/productBaseInfo/productAttributes/imageUrls/200x200'
    var images200x200Ref = firebase.database().ref(url).once('value').then((snapshot)=>{
        //alert(snapshot.val())
        this.setState({imageUrl200x200 : snapshot.val()})
    
})

  

}


export function getProductTitle(PID){

 var url = 'Affiliate/data/MOBEBZPFZRRPF9WF/_productData/productBaseInfo/productAttributes/title'
    var title = firebase.database().ref(url).once('value').then((snapshot)=>{
        
        //this.setState({title : snapshot.val()})
        //console.log(snapshot.val())
        return snapshot.val()
})
    
    
}