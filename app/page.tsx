import { Link } from "@nextui-org/link";

export default function Page() {
    return (
        <div>
            Home Page
            <Link href="/sign-up">Sign up</Link>
            <Link href="/admin">Open Admin Panel</Link>
        </div>
    );
}
