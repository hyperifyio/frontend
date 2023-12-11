// Copyright (c) 2022-2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { HelmetProvider } from "react-helmet-async";
import { HgFrontend } from "./io/hyperify/frontend/HgFrontend";
import { HgReact } from "./io/hyperify/frontend/HgReact";
import { HgReactContext } from "./io/hyperify/frontend/HgReactContext";
import { Hyper } from "./io/hyperify/frontend/components/apps/Hyper";
import { HyperRenderer } from "./io/hyperify/frontend/renderers/HyperRenderer";
import { HyperRendererImpl } from "./io/hyperify/frontend/renderers/HyperRendererImpl";
import './io/hyperify/frontend/styles/hyperapp-index.scss';

const PUBLIC_URL : string = process.env.PUBLIC_URL ?? 'http://localhost:3000';

const hyperRenderer : HyperRenderer = HyperRendererImpl.create(PUBLIC_URL);

HgFrontend.initialize();
HgReact.initialize(
    <HelmetProvider>
        <HgReactContext>
            <Hyper
                url={`${PUBLIC_URL}/api/v1`}
                renderer={hyperRenderer}
            />
        </HgReactContext>
    </HelmetProvider>
);
