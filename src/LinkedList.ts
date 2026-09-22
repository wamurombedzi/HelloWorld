class ListNode {
    public data: number;
    public next: ListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    public head: ListNode | null;
    constructor(head: ListNode | null) {
        this.head = head;
    }
    public print(): void {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
        return;
    }
    public pushNode(data: number): void {
        if (this.head === null) {
            this.head = new ListNode(data);
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new ListNode(data);
        }
    }

    public insertHead(data: number): void {
        let node = new ListNode(data);
        let temp = this.head;
        this.head = node;
        this.head.next = temp;
    }

    public find(value: number): boolean {
        let temp = this.head;
        while (temp !== null) {
            if (temp.data === value) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
}

let nodeOne = new ListNode(5);
let linkedList = new LinkedList(nodeOne);
linkedList.pushNode(10);
linkedList.pushNode(15);
linkedList.pushNode(20);

linkedList.insertHead(38);
linkedList.print();

console.log('Is 24 in the list? ', linkedList.find(24));
console.log('Is 15 in the list? ', linkedList.find(15));