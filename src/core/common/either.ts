export class Either<L, R> {
    private leftValue: L | null;
    private rightValue: R | null;

    private constructor(leftValue: L | null, rightValue: R | null) {
        this.leftValue = leftValue;
        this.rightValue = rightValue;
    }

    public static left<L, R>(value: L): Either<L, R> {
        return new Either(value, null);
    }

    public static right<L, R>(value: R): Either<L, R> {
        return new Either(null, value);
    }

    public isLeft(): boolean {
        return this.leftValue !== null;
    }

    public isRight(): boolean {
        return this.rightValue !== null;
    }

    public getLeft(): L | null {
        if (this.isLeft()) {
            return this.leftValue;
        }
        throw new Error("No Left value");
    }

    public getRight(): R | null {
        if (this.isRight()) {
            return this.rightValue;
        }
        throw new Error("No Right value");
    }

    public fold<T>(onLeft: (left: L) => T, onRight: (right: R) => T): T {
        if (this.isLeft() && this.leftValue !== null) {
            return onLeft(this.leftValue);
        } else if (this.isRight() && this.rightValue !== null) {
            return onRight(this.rightValue);
        }
        throw new Error("No value present");
    }
}
