import { Editor } from "@/components/editor/Editor";
import { Header } from "@/components/navs/header";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

export default function page() {
  return (
    <div>
      <Header classname="">
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title"> Doc Title </p>
        </div>
      </Header>
      <SignedOut>
        <SignInButton mode="modal"/>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <Editor />
    </div>
  )
}
