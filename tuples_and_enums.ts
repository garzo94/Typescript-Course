// const stuff: string[] = []
const color: [number, number, number] = [1,2,3]
type HttpResponse = [number,string];
const goodRes: HttpResponse = [200,'Ok']

const responses: HttpResponse[] = [] // array of tuples

//Enums
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const mystatus = OrderStatus.DELIVERED

function idDelivered(status:OrderStatus){
    return status === OrderStatus.DELIVERED
}

idDelivered(OrderStatus.RETURNED)

enum ArrowKeys {
    UP='UP',
    DOWN='DOWN',
    LEFT='LEFT',
    RIGHT='RIGHT',
    ERROR=21
}