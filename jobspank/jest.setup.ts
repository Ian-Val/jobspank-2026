import "@testing-library/jest-dom";
import { Temporal } from "@js-temporal/polyfill";

(globalThis as any).Temporal = Temporal;
