class Transaction {
    String company;
    int quantity;
    double price;

    public Transaction(String company, int quantity, double price) {
        this.company = company;
        this.quantity = quantity;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Company: " + company + ", Quantity: " + quantity + ", Price: " + price;
    }}