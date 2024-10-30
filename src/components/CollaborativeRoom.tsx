"use client";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import { Editor } from "@/components/editor/Editor";
import { Header } from "@/components/navs/header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function CollaborativeRoom() {
  return (
    <RoomProvider id="room">
      <ClientSideSuspense
        fallback={
          <div className="flex  justify-center items-center top-1/2 left-1/2 ">
            {" "}
            Loading ...{" "}
          </div>
        }
      >
        <Header classname="">
          <div className="flex w-fit items-center justify-center gap-2">
            <p className="document-title text-sm"> Share </p>
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </Header>

        <Editor />
      </ClientSideSuspense>
    </RoomProvider>
  );
}
