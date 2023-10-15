"use client";

import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { identicon } from "@dicebear/collection";

export default function Home() {
  const avatar = useMemo(() => createAvatar(identicon).toDataUriSync(), []);

  return <img src={avatar} alt="Avatar" width={100} height={100} />;
}
