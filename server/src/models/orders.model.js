class orderModel{
    constructor(userId,orderDate,orderName,cartData,saleAmount,address,cartLength,status,reviewId,transactionId){
        this.userId=userId;
        this.orderDate=orderDate;
        this.orderName=orderName;
        this.totalAmount=totalAmount;
        this.saleAmount=saleAmount;
        this.address=address;
        this.cartData=[];
        this.cartLength=cartLength;
        this.status=status;
        this.reviewId=reviewId;
        this.transactionId=transactionId;
    }
    addCartData(cartData){
        cartData.push(cartData);
    }
 }