import { Editor } from "@/components/editor/Editor";
import { Header } from "@/components/navs/header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function page() {
  return (
    <div>
      <Header classname="">
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title text-sm"> Doc Title </p>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      <Editor />
    </div>
  );
}
